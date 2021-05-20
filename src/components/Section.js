import React from 'react';
import "./styles/Section.css";

const Section = ({ Icon, color, selected, title }) => {
    return (
        <div       className={`section ${selected && "section--selected"}`}
                   style={{
                       borderBottom: `3px solid ${selected && color}`,
                       color: `${selected && color}`,
                   }}>
            <Icon />
            <h4>{title}</h4>
        </div>
    );
};

export default Section;
