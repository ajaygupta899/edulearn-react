import React from 'react';
export default class Home extends React.Component{
    render(){ return(
<div>
        <div>
             <div className="main">
        <div className="navbar" style={{display:'inline-flex'}}>
            <div className="logo-image">
                <img src={"assets/images/cutm logo.png"} alt="" className="img-fluid"/>    
          </div>
            <div className="iconf" style={{float:'left'}}>
                <div id="main">
                   <p aling="left"> <button className="openbtn" onClick="openNav()">☰ Menu</button> </p>   
                  </div>    
            </div>
        </div> 
        <div id="mySidebar" className="sidebar">
            <a href="/#" className="closebtn" onclick="closeNav()">×</a>
            <a href="/#">About</a>
            <a href="/#">Services</a>
            <a href="/#">Contact</a>
            <a href="/#">Developer</a>
          </div>
          
        
        <div className="content">
            
            <h1>Welcome To <br/><span>EduLearn</span> !</h1>
            <p className="par">
                Teach in a more Interactive Enviroment.
            </p>

                <button className="cn"><a href="/#">JOIN US</a></button>

                <div className="form">
                    <h2>Login Here</h2>
                    <input type="email" name="email" placeholder="Enter Username"/>
                    <input type="password" name="" placeholder="Enter Password "/>
                    <button className="btnn"><a href="/#">Login</a></button>

                    <p className="link">Don't have an account<br/>
                    <a href="/#">Sign up </a> here</p>
                    <p className="liw">Log in with</p>
                    <div className="icons">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/#"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="/#"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="/#"><ion-icon name="logo-google"></ion-icon></a>
                    </div>

                </div>
                    </div>
                </div>
   <section className="about"/>
                    <div className="container">
                        <img src="assets/images/teaching.jpg"  alt=""/>
                        <div className="about-text">
                            <h1>About Us</h1>
                            <br/>
                
                            <p>EduLearn is an educational technology company offering a communication, collaboration, and coaching platform for many schools and teachers.
                                 <br/>The EduLearn network enables teachers to share content, distribute quizzes, assignments, and manage communication with students, colleagues, and parents.
                                  <br/>EduLearn is very teacher-centric in their design and philosophy: students and parents can only join EduLearn if invited to do so by a teacher.”
                                 
                             </p>
                        <div/>
                        
                    </div>
               <section/>
        </div>
    </div>
    
    <div className="animation">
        <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="S3.jpg" className="d-block w-100" alt="Wild Landscape" />
                </div>
                <div className="carousel-item">
                    <img src="S1.jpg" className="d-block w-100" alt="Camera" />
                </div>
                <div className="carousel-item">
                    <img src="S2.jpg" className="d-block w-100" alt="Exotic Fruits" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div className="service">
		<div className="title">
			<h2>Our Services</h2>
		</div>

		<div className="box">
			<div className="card">
				<i className="fas fa-users"></i>
				<h5>Join as a Student</h5>
				<div className="pra">
					<p>Here Student can access their work assigned by their teacher .</p>
					<p style={{align:'center'}}>
						<a className="button" href="/#">Read More</a>
					</p>
				</div>
			</div>

			<div className="card">
				<i className="far fa-user"></i>
				<h5>Join as a Teacher</h5>
				<div className="pra">
					<p>This Helps a teacher to assign work to his/her students and also keep an eye on their activity.</p>

					<p style={{align: 'center'}}>
						<a className="button" href="/#">Read More</a>
					</p>
				</div>
			</div>

			<div className="card">
				<i className="far fa-id-card"></i>
				<h5>Join as a Parent</h5>
				<div className="pra">
					<p>As a parent you can see the activity log of you child.</p>
					<p style={{align: 'center'}}>
						<a className="button" href="/#">Read More</a>
					</p>
				</div>
			</div>
		</div>
	</div>
    <footer>
		<p>EduLearn by Centurion University</p>
		<p>A Enviroment where teaching is made easy in a form of social media tool student love to learn and interact with their teacher.<br/>
        Find us </p>
        <div className="siteFooterBar">
            <center>
            <div className="content">
                <img src="/cutm logo.png" alt='' width="100px" height="100px" />
            </div>
        </center>
        </div>
		<div className="social">
			<a href="/#"><i className="fab fa-facebook-f"></i></a>
			<a href="/#"><i className="fab fa-instagram"></i></a>
			<a href="/#"><i className="fab fa-twitter"></i></a>
            <br/>
            
        <br/>
		</div>
        <br/>
        <br/>&nbsp;
		<p className="end">© CopyRight Reserve By EduLearn</p>
	

   
        
        </footer>
        </div>
        );
    
}
}
