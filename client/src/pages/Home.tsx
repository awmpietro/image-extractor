import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/forms/SearchForm';
import Message from '../components/Message';
import { Loading } from '../components/loading';
import { socketHandle, socketDisconnect, extract } from '../store/actions';

interface Props {
    extract(url: string): any;
    isError: boolean;
    message: string;
    images: Array<any>;
    socketHandle(): any;
    socketDisconnect(): any;
}

const Home: React.FC<Props> = ({ extract, isError, message, images, socketHandle, socketDisconnect }: Props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        socketHandle();
        return () => {
            socketDisconnect();
        };
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [images, isError]);

    const onSubmit = (values) => {
        setLoading(true);
        const { url } = values;
        return extract(url);
    };
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Image Extractor</h5>
                            <SearchForm onSubmit={onSubmit} />
                            <Message content={message} error={isError} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="row">
                        {images.map((img, index) => {
                            return (
                                <div className="col-md-2 mt-2" key={index}>
                                    <a rel="noopener noreferrer" href={img.src} target="_blank">
                                        <img src={img.src} className="img-fluid" alt={img.description} />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { images } = state.search;
    const { isError, message } = state.alert;
    return { images, isError, message };
};

export default connect(mapStateToProps, {
    extract,
    socketHandle,
    socketDisconnect,
})(Home);
