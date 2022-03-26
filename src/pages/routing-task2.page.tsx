import React from 'react';
import './home.page.scss';
import {useHistory} from 'react-router';

const RoutingTask2Page = () => {
    const history = useHistory();
    return (
        <div>
            <div>Page2</div>
            <div>
                <button onClick={() => history.push('/task3/reduct')} className="routing-button">
                    to page Task3
                </button>
            </div>
        </div>
    );
};

export default RoutingTask2Page;
