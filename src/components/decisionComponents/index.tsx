import React from 'react';
import Style from './index.module.scss';

interface DecisionFormProps {
    // define your props here
}

const DecisionForm: React.FC<DecisionFormProps> = () => {
    return (
        <div className={Style.DecisionForm}>
            DecisionForm Component
        </div>
        );
};

export default DecisionForm;
