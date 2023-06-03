import logo from '../../assets/img/panel/Logo.svg';

export default function LeftPanel() {
    return (
        <div className="panel-link">
			<div className="panel-link-button">
				<span></span>
			</div>
			<div className="panel-link__burger">
				<div className="">
					<div className="panel-link__logo">
						<a href="#"><img src={logo} alt="" /></a>
					</div>
					<div className="panel-link__list">
						<a href="#" className="panel-link__item _active icon-category"></a>
						<a href="#" className="panel-link__item icon-document-favorite"></a>
						<a href="#" className="panel-link__item icon-chart-2"></a>
						<a href="#" className="panel-link__item icon-personalcard"></a>
						<a href="#" className="panel-link__item icon-search-normal"></a>
						<a href="#" className="panel-link__item icon-home-hashtag"></a>
					</div>
					<div className="panel-link__exit">
						<a href="#" className="panel-link__item icon-login"></a>
					</div>
				</div>
			</div>
		</div>
    )
}