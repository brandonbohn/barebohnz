function MainBlog() {
  return (

    <div className="container my-5">
<div className="row bg-light p-4 rounded shadow">
<h1 className=" text-center ">THE INTERNATIONAL NOMAD TERMINAL  </h1>
<div className="d-flex justify-content-center">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
    alt="Cartagena"
    style={{ width: 280, height:200, objectFit: 'cover', borderRadius: 8 }}
  />
  <img
    src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=300&q=80"
    alt="Istanbul"
    style={{ width: 280, height: 200, objectFit: 'cover', borderRadius: 8 }}
  />
  <img
    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80"
    alt="DC Capitol"
    style={{ width: 280, height: 200, objectFit: 'cover', borderRadius: 8 }}
  />
  <img
    src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80"
    alt="Beijing"
    style={{ width: 280, height: 200, objectFit: 'cover', borderRadius: 8 }}
  />
</div>
   <p className="text-center">From DC to five continents and back-global analysis rooted in experience</p>

  <div className="body">      
            
    <div>
      <div>
 <h5 className="text">the Effect of Social Media on Governance </h5>
<p className="body" >
  The Effect of Social Media on Governance: A Case Study of the 2020 US Presidential Election
  The 2020 US presidential election was a pivotal moment in American history, marked by unprecedented levels of voter engagement and participation. One of the key factors that contributed to this surge in voter turnout was the role of social media in shaping public opinion and mobilizing voters. In this blog post, we will explore the impact of social media on governance during the 2020 US presidential election, focusing on its influence on voter behavior, political discourse, and the overall electoral process.
  Social media platforms such as Twitter, Facebook, and Instagram played a significant role in shaping the political landscape leading up to the election. Candidates and political parties utilized these platforms to communicate directly with voters, bypassing traditional media channels. This direct communication allowed candidates to present their messages in real-time, respond to criticism, and engage with supporters on a personal level. As a result, social media became a powerful tool for political mobilization, enabling candidates to reach a wider audience and galvanize support.  
            </p>

      </div>
       
    
 Posted on {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    
      </div>
  

    </div>
    </div>
            
            </div>
        
    
  
  );
}
export default MainBlog;