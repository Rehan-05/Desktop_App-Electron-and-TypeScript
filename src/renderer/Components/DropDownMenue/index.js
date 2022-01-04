import * as React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import suffixedClassName from './suffixedClassName';
import './style.scss';
import Icon from 'react-web-vector-icons';

class DropDownMenuSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (value) => {
    const { handleOnClick } = this.props;
    handleOnClick(value);
  };

  handleClickOutside = () => {
    const { isMenuOpen } = this.state;

    return isMenuOpen && this.setState({ isMenuOpen: false });
  };

  getClassName = (suffix) => {
    const { className } = this.props;

    return suffixedClassName(className, suffix);
  };

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  renderPlaceholder = placeholder => <div style={{cursor:"pointer"}}>{placeholder || 'Menu Name'}</div>;

  renderOptionsMenu = options => options.map((item, i) => {
    if (!item.hidden) {
      if (item.options && item.options.length) {
        return (
          <div key={`${item.label}-${i}`} className="options-container" style={this.props.optionContainerStyle}>
            {item.icon ? (
              <Icon
                name={item.icon.name}
                font={item.icon.font}
                size={item.icon.size}
                color={item.icon.color}
                style={{ marginRight: '10px',...this.props.optionIconStyle }}
              />
            ) : null}
            <div
              className={`options-label ${this.getClassName(
                'options-label',
              )}`}
              style={{...this.props.optionLabelStyle,...item.labelStyle}}
            >
              {item.label}
            </div>
            {this.renderSubMenu(item)}
          </div>
        );
      }

      return (
        <React.Fragment key={`${item.label}-${i}`}>
          {this.renderSubMenu(item)}
        </React.Fragment>
      );
    }
    return null;
  });

  renderSubMenu = (item) => {
    if (!item.hidden) {
      if (item.options && item.options.length) {
        return (
          <>
            <div
              className={`arrow-right ${this.getClassName('arrow-right')}`}
            />
            <div
              className={`options-sub-menu-container ${this.getClassName(
                'options-sub-menu-container',
              )}`}
            >
              {this.renderOptionsMenu(item.options)}
            </div>
          </>
        );
      }

      return (
        <div
          className="options-container"
          onClick={() => this.handleOnClick(item.value)}
          style={this.props.optionContainerStyle}
        >
          {item.icon ? (
            <Icon
            name={item.icon.name}
            font={item.icon.font}
            size={item.icon.size}
            color={item.icon.color}
            style={{ marginRight: '10px' }}
          />
          ) : null}
          <div
            className={`options-label ${this.getClassName('options-label')}`}
            style={{...this.props.optionLabelStyle, ...item.labelStyle}}
          >
            {item.label}
          </div>
          <span>&#8629;</span>
        </div>
      );
    }
    return null;
  };

  render() {
    const { isMenuOpen } = this.state;
    const { values } = this.props;
    return (
      <div className="root-menu-container" style={this.props?.MainContainerStyle}>
        <div className="menu-selector" onClick={this.toggleMenu} style={this.props.ToggleButtonStyle}>
          {this.renderPlaceholder(values.placeholder)}
        </div>
        <div
          className={`menu-level-options-container ${this.getClassName(
            'menu-level-options-container',
          )} ${
            isMenuOpen
              ? `menu-open ${this.getClassName('menu-open')}`
              : `menu-close ${this.getClassName('menu-close')}`
          }`}
          style={this.props.DropDownMenuContainerStyle}
        >
          <div className="options-main-menu">
            {this.renderOptionsMenu(values.options)}
          </div>
        </div>
      </div>
    );
  }
}

DropDownMenuSelect.propTypes = {
  handleOnClick: PropTypes.func,
  className: PropTypes.string,
  MainContainerStyle:PropTypes.object,
  DropDownMenuContainerStyle:PropTypes.object,
  optionIconStyle:PropTypes.object,
  ToggleButtonStyle:PropTypes.object,
  optionLabelStyle:PropTypes.object,
  values: PropTypes.shape({
    placeholder: PropTypes.any.isRequired,

    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      labelStyle: PropTypes.object,
      hidden: PropTypes.bool,
      icon: PropTypes.shape({
        name: PropTypes.string,
        font: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
      }),
    })),
  }),
};

DropDownMenuSelect.defaultProps = {
  values: {
    placeholder: '',
    options: [],
  },
  handleOnClick: () => { },
  className: '',
};


export default onClickOutside(DropDownMenuSelect);
