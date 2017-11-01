require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

/**
 * [解析json文件得到数据源]
 * @type js数组对象
 */
let imageDatas = require('../data/imageDatas.json');


/**
 * getImageURL 可用image-loder取得图像名对于的路径
 * @param  {[]}
 * @return {[]}                                                                    
 */
imageDatas = (function getImageURL(imageDataArr){

	imageDataArr.forEach(function(item){
		item.imageUrl = require("../images/"+item.fileName);
	});

	return imageDataArr;
})(imageDatas);






class ImgFifgure extends React.Component{
	render(){
		return(
			<figure className="img-figure">
				<img className="img-title" src={this.props.data.imageUrl} alt={this.props.data.title}/>
				<figcaption>
					<h2>{this.props.data.title}</h2>
				</figcaption>
			</figure>
		);
	}
}

class AppComponent extends React.Component {
  render() {
	var imgFifgures = [], 
		controllerUtils = [];

	imageDatas.forEach(function(item){
		imgFifgures.push(<ImgFifgure data={item}/>);
	});

    return (
    	<section className="stage">
    		<section className="img-sec">
    			{imgFifgures}
    		</section>
    		<nav className="controller-nav">
    			{controllerUtils}
			</nav>
    	</section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
