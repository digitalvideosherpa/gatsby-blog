import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import config from "../../../content/meta/config";
import Menu from "../Menu";

import avatar from "../../images/jpg/dmc.jpg";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";


class Header extends React.Component {
  state = {
    fixed: false
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

    const mainHeaderStyle={
      width:"240px", 
    }
    return (
      <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            <div className="logo">
            <img src={avatar} alt={config.siteTitle} />
            </div>
            </Link>
            <div className="mainheader" style={mainHeaderStyle}>
            <SocialMediaIcons
<<<<<<< HEAD
<<<<<<< HEAD
              urls={[
                "https://www.linkedin.com/in/damian-mcnamara-7771958/",
                "https://github.com/digitalvideosherpa",
                "https://twitter.com/damian_mcnamara",
                "mailto:mail@thedmctech.com"
              ]}
              color="silver"
            />
          </div>
=======
=======
>>>>>>> parent of 684889d... GA
                urls={[
                  "https://www.linkedin.com/in/damian-mcnamara-7771958/",
                  "https://github.com/digitalvideosherpa",
                  "https://twitter.com/damian_mcnamara",
<<<<<<< HEAD
<<<<<<< HEAD
                  "mailto:damian@dmctech.net.au"
                ]}
                color="silver"/>
                </div>
>>>>>>> parent of a5a62bb... update graphics
=======
                  "mailto:mail@thedmctech.com"
=======
                  "mailto:damian@dmctech.net.au"
>>>>>>> parent of a5a62bb... update graphics
                ]}
                color="silver"/>
                </div>
>>>>>>> parent of 684889d... GA
          <FontLoadedContext.Consumer>
            {loaded => (
              <ScreenWidthContext.Consumer>
                {width => (
                  <Menu
                    path={path}
                    fixed={fixed}
                    screenWidth={width}
                    fontLoaded={loaded}
                    pages={pages}
                    theme={theme}
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        <style jsx>{`
          .header {
            align-items: center;
            justify-content: center;
            background-color: ${theme.color.neutral.white};
            display: flex;
            height: ${theme.header.height.default};
            position: relative;
            top: 0;
            width: 100%;
            align-items: center;
            :global(a.logoType) {
              align-items: center;
              display: flex;
              flex-direction: "column";
              color: ${theme.text.color.primary};
              .logo {
                flex-shrink: 10;
              }
            }
            &.homepage {
              position: absolute;
              background-color: transparent;
              height: ${theme.header.height.homepage};
            }
          }
          h1 {
            font-size: ${theme.font.size.m};
            font-weight: ${theme.font.weight.standard};
            margin: ${theme.space.stack.xs};
          }
          h2 {
            font-weight: ${theme.font.weight.standard};
            font-size: ${theme.font.size.xxs};
            letter-spacing: 0;
            margin: 0;
          }
          .logo {
            border-radius: 0px;
            border: 0px solid #eee;
            display: inline-block;
            height: 60px;
            margin: ${theme.space.inline.default};
            overflow: hidden;
            width: 60px;
            transition: all 1.5s;
            .homepage & {
              height: 60px;
              width: 60px;
            }
            img {
              width: 100%;
            }
          }
          .sensor {
            display: block;
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 0;
            right: 0;
            height: 1px;
            top: ${path === "/" ? theme.header.height.homepage : theme.header.height.default};
          }
          @from-width tablet {
            .header {
              padding: ${theme.space.inset.l};
              &.homepage {
                height: ${theme.header.height.homepage};
              }
            }
          }
          @below desktop {
            .header.homepage {
              .logo {
                border: none;
              }
              :global(a.logoType),
              h1 {
                color: ${theme.color.neutral.white};
              }
              h2 {
                color: ${theme.color.neutral.gray.d};
              }
            }
          }
          @from-width desktop {
            .header {
              align-items: center;
              background-color: ${theme.color.neutral.white};
              display: flex;
              position: absolute;
              top: 0;
              width: 100%;
              justify-content: space-between;
              transition: padding 1.5s;
              &.fixed {
                height: ${theme.header.height.fixed};
                background-color: ${theme.color.neutral.white};
                left: 0;
                padding: 0 ${theme.space.m};
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
                h1 {
                  margin: ${theme.space.stack.xxs};
                }
                h2 {
                  display: none;
                }
              }
              &.homepage:not(.fixed) {
                :global(a.logoType),
                h1 {
                  color: ${theme.color.neutral.white};
                }
                h2 {
                  color: ${theme.color.neutral.gray.d};
                }
              }
            }
            .header :global(a.logoType) {
              text-align: left;
              flex-direction: row;
              flex-shrink: 0;
              width: auto;
            }
            .logo {
              margin: ${theme.space.inline.default};
              .fixed & {
                height: 36px;
                width: 36px;
              }
              .header.homepage:not(.fixed) & {
                border: none;
              }
            }
            h2 {
              animation-duration: ${theme.time.duration.default};
              animation-name: h2Entry;
            }
            @keyframes h2Entry {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;