function NavBar(props) {
    console.log(props.categories);
    return (
        <nav className='nav'>
        <hr />
        <ul className='nav-list'>
          {props.categories.map(item => {
                return <li><button className='category'>{item}</button></li>;
          })}
        </ul>
        <hr />
      </nav>
    );
}

export default NavBar;