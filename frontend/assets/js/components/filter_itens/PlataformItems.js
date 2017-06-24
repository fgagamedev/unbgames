import React from "react";
import PropTypes from "prop-types";
import {Dropdown} from "semantic-ui-react";
import {dataListApi} from "../../resources/DataListApi";

export default class PlatformItems extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            "platforms":[],
            "selectedPlatform":'Plataforma'
        };
    }

    componentWillMount () {

        dataListApi("/api/platforms/", (platforms) => {

              this.setState({platforms});

          });

    }

    handleClick(platformName){
        const option = platformName;
        if(platformName == ''){
            platformName = "Todas as plataformas";
        }
        this.setState({ selectedPlatform: platformName });
        this.props.callbackParent('platformOption', option);
    }

    mountGenreItems(){
        if(typeof this.state.platforms === "undefined"){
            return false
        }
        const gamePlatformsItems = this.state.platforms.map((platform, i) =>
                <Dropdown.Item key={i} onClick={(e) => this.handleClick(platform.name, e)}>
                    {platform.name}
                </Dropdown.Item>
        );
        return gamePlatformsItems;

    }

    render (){
        return(
            <Dropdown text={this.state.selectedPlatform}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={(e) => this.handleClick('', e)}>
                        Todas plataformas
                    </Dropdown.Item>
                    {this.mountGenreItems()}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

PlatformItems.propTypes = {
  callbackParent: PropTypes.func.isRequired
}
