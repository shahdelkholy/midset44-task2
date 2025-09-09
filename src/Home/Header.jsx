import React from 'react'

function Header() {
  return (
    <div>
         <header className="hero">
    <div className="container text-center">
      <h1>أهلاً بيك في موقع بسيط</h1>
      <p>دا مثال سهل تقدر تشتغل عليه في React</p>
      <button className="btn btn-light mt-3" onclick="scrollToSection('section1')">ابدأ</button>
    </div>
  </header>
    </div>
  )
}

export default Header