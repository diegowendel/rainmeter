import React, { PureComponent } from 'react';
import '../../styles/LanguageToggle.scss';

class LanguageToggle extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      toggleClass: 'toggle'
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale){
      const isEnglish = this.props.locale.startsWith("en");
      const toggleClass = isEnglish ? "toggle" : "toggle portuguese-selected";
      this.setState({ toggleClass });
    }
  }

  onChange() {
    this.toggle();
    this.props.onChangeLocale(this.props.locale.startsWith("en") ? "pt-BR" : "en-US");
  }

  toggle() {
    const isEnglish = this.props.locale.startsWith("en");
    const toggleClass = isEnglish ? "toggle portuguese-selected" : "toggle";
    this.setState({ toggleClass });
  }

  render() {
    return (
      <div className="grid mt-3" onClick={this.onChange}>
        <div className="option-en">En</div>
        <div className="option-pt">Pt</div>
        <div className={this.state.toggleClass}>
          <div className="toggle-selector" />
        </div>
      </div>
    );
  }
}

export default LanguageToggle;
