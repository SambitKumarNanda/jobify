import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import Logo from "../components/Logo";

function Landing() {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda cupiditate sunt accusamus. Voluptate tempora quo
              similique, quidem ut obcaecati, perferendis, optio veniam quis
              odit temporibus soluta? Dolores cum, impedit rerum deserunt
              possimus quidem ut repellendus quibusdam, debitis similique, fuga
              repudiandae.
            </p>
            <button className="btn btb-hero">Login/Register</button>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
}

export default Landing;
