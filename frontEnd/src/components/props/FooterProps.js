import React, { Component } from 'react';


// function FooterProps({footerLink}) {
//   return (
//     <>
//             {footerLink.map((item, index)=>{
//                 return <li 
//                 className="" key={index}>
//                 <a className="" 
//                 href={item[0]}>
//                      {item[1]}
//                 </a>
//             </li>
//             })}
//              </> 
//   )
// }

// export default FooterProps

class FooterProps extends Component {
    render() {
        return (
            <li >
                <a href={this.props.linkUrl}>{this.props.linkName}</a>
            </li>
        );
    }
}

export default FooterProps;
