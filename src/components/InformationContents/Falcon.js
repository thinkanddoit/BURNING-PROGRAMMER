import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Falcon extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Falcon");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Falcon"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Falcon 란?">
        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="" target="_blank">Falcon</a> } />,
        <DescriptionItem informationTitle="Falcon 활용 분야">
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "Falcon" } />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Falcon;