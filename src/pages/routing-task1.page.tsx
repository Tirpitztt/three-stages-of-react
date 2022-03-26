import React from 'react';
import './home.page.scss';
import {useHistory} from 'react-router';

const RoutingTask1Page = () => {
    const history = useHistory();
    return (
        <div>
            <div>Page1</div>
            <div>
                <button onClick={() => history.push('/task3/text')} className="routing-button">
                    to page Task3
                </button>
            </div>
        </div>
    );
};

export default RoutingTask1Page;
