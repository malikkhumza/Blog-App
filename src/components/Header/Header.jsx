import React from 'react'
import { Container,Logo,LogoutBtn } from '../index.js'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'



function Header() {

const navigate = useNavigate()
const authStatus = useSelector(state => state.auth.status)

const navItems = [
  {
    name: 'Home',
    slug: "/",
    active: true
  }, 
  {
    name: "Login",
    slug: "/login",
    active: !authStatus,
},
{
    name: "Signup",
    slug: "/signup",
    active: !authStatus,
},
{
    name: "All Posts",
    slug: "/all-posts",
    active: authStatus,
},
{
    name: "Add Post",
    slug: "/add-post",
    active: authStatus,
},
]

  return (
    <header className='bg-[#DFD8CA] shadow py-3'>
        <Container>
        <nav className='flex'>
          <div className='mr-4'>
          <Link>
          <Logo className='flex items-center justify-center' width="100px" />
          </Link>

          </div>

          <ul className='flex ml-auto font-custom text-4xl text-[#9D6C53]'>
            {
              navItems.map((item) => 
                item.active ? (
                  <li key={item.name }>
                    <button
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={() => navigate(item.slug)}>{item.name}</button>
                  </li>
                ): null
            )
            }
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            ) }
          </ul>

        </nav>
        </Container>
    </header>
  )
}

export default Header