import React from 'react'
import { services } from '../utils/constants'
import { styled } from 'styled-components'

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>Coustom <br/> 
          built for you</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ipsam ad fugiat dignissimos reiciendis itaque incidunt voluptatum esse dolores ut velit aliquam repellendus magni, 
            quo deserunt modi dolor, at animi minima?
          </p>
        </article>
        <div className="services-center">
          {services.map(({icon,text,title,id})=>{
            return <article key={id} className='services'>
              <span className="icon">{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
h3,
h4{
  color: var(--clr-primary-1);
}
padding: 5rem 0;
background: var(--clr-primary-10);

.header h3{
  margin-bottom: 2rem;
}
p{
  margin-bottom: 0;
  line-height: 2;
  color: var(--clr-primary-3);
}
.services-center{
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
}
.services{
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
  p{
    color: var(--clr-primary-2);
  }
}
span{
  width: 4rem;
  height: 4rem;
  display: grid;
  margin: 0 auto;
  place-items: center;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);
  svg{
    font-size: 2rem;
  }
}
@media (min-width:992px) {
  .header{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width:576px) {
  .services-center{
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
@media (min-width:1280px) {
  padding: 0;
  .services-center{
    transform: translateY(5rem);
  }
}
`

export default Services