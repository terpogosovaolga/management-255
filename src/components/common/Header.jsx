export default function Header() {
    return (
        <header>
				<div class="header">
					<div class="container">
						<a href="" class="header__logo">
							<img src="img/header/Logo.svg" alt="" />
						</a>
						<ul class="header__list menu__body">
							<li class="header__link">
								<a href="#" class="hover-transform">Главная</a>
							</li>
							<li class="header__link">
								<a href="#" class="hover-transform">Мои проеты </a>
							</li>
							<li class="header__link">
								<a href="#" class="hover-transform">Рейтинг</a>
							</li>
							<li class="header__link">
								<a href="#" class="hover-transform">Студия</a>
							</li>
							<li class="header__link">
								<a href="#" class="hover-transform">Выход</a>
							</li>
						</ul>
						<div class="header-buttons">
							<form action="#" class="header-form">
								<input type="text" name="header-search" class="header-form__input" />
								<button class="header-form__button icon-search"></button>
							</form>
							<div class="header-buttons__button-form icon-search"></div>
							<a href="" class="header-buttons__logo hover-transform ibg">
								<img src="img/header/1.jpg" alt="" />
							</a>
							<div class="menu__icon">
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</header>
    )
}