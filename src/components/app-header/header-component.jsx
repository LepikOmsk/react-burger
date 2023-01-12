import React from 'react';

const HeaderComponent =({icon, text}) => {
    return(
    <div>
    <div className="mr-2" children={icon}/>
        <p className="text text_type_main-default">
            {text}
        </p>    
    </div>
    )
}

export default HeaderComponent;


// export const NavLink = ({ icon, text, type }) => (
// <div className={navLink.link}>
// <div className={'mr-2'} children={icon} />
// {type === 'primary' ? (
// <p className={cn('text text_type_main-default', navLink.link__text)}>{text}</p>
// ) : (
// <p className={cn('text text_type_main-default text_color_inactive', navLink.link__text)}>
// {text}
// </p>
// )}
// </div>
// );

// NavLink.propTypes = {
// icon: PropTypes.element,
// text: PropTypes.string,
// type: PropTypes.string,
// };