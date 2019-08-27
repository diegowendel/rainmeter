import React, { PureComponent } from 'react';
import './LanguageToggle.css';

class LanguageToggle extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isEnglish: true,
      toggleClass: 'item item-3'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const toggleClass = this.state.isEnglish ? "item item-3" : "item item-3 item-translate";
    this.setState({ isEnglish: !this.state.isEnglish, toggleClass });
  }

  render() {
    return (
      <div className="grid" onClick={this.onChange}>
        <div className="item item-1">En</div>
        <div className="item item-2">Pt</div>
        <div className={this.state.toggleClass}>
          <div style={{backgroundColor: '#eee', margin: '1px', borderRadius: '5px', width: '30px'}}>
            alo
          </div>
        </div>
      </div>
    );
  }
}

export default LanguageToggle;
