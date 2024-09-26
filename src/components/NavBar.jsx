function NavBar(props) {
    return (
        <nav className='nav'>
        <hr />
        <ul className='nav-list'>
          {props.categories.map((item, index) => {
                return <li key={index}><button className='category'>{item}</button></li>;
          })}
        </ul>
        <hr />
      </nav>
    );
}

export default NavBar;