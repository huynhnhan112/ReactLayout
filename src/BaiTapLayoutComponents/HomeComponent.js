import React, { Component } from 'react'

import HeaderComponent from '../BaiTapLayoutComponents/HeaderComponent'
import BodyComponent from './BodyComponent'
import FooterComponent from './FooterComponent'

export default class HomeComponent extends Component {
    render() {
        return (
        <div classname="container-fuild">
            <div classname="row">
                <div classname="col-12">
                    <HeaderComponent />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BodyComponent />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FooterComponent />
                </div>
            </div>
        </div>
        )
    }
}
