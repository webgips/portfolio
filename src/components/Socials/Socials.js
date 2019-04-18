import React, { Component } from "react";
import socialSprite  from "./../../assets/images/socials_sprite.svg"

class Socials extends Component {
	constructor(props) {
    super(props);
    this.state = {
			socialsArr : [
				{
					name: 'vk',
					url: 'https://vk.com/id6538692',
					iconName : '#vk'
				}, 
				{ 
					name: 'telegram',
					url: 'https://t.me/MarkovMaxim',
					iconName : '#telegram'
				},
				{
					name: 'github',
					url: 'https://github.com/webgips',
					iconName :'#github-logo'
				}
			]
		};
  }
  render() {
		const socialItems = this.state.socialsArr.map((social, index) => 
			<li className="socials__item" key={index}>
				<a
					className="socials__link"
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg className="icon">
						<use xlinkHref={ socialSprite + social.iconName} />
					</svg>
				</a>
			</li>
		)

    return (
      <ul className="socials__list">
				{socialItems}
      </ul>
    );
  }
}

export default Socials;
