import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>Blog Page</h3>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">1 what is cors?</h5>
                    <p class="card-text">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">2 Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p class="card-text">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        STYTCH.
                        Ory.
                        Supabase.
                        Okta.
                        PingIdentity.
                        Keycloak.
                        Frontegg.
                        Authress.</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">3 How does the private route work?</h5>
                    <p class="card-text">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">4 What is Node? How does Node work?</h5>
                    <p class="card-text">Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;