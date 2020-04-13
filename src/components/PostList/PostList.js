import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Thiago Primitivo",
          avatar: "https://scontent.fssa2-1.fna.fbcdn.net/v/t31.0-8/p960x960/28423582_2106484286240925_5702693533648848387_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_eui2=AeFNCSgpDLjQiMe0Fkjhix4koskVE_8KSM6iyRUT_wpIzvDab7KLVYWByjofzu_-9Qwe_txBHs5_eTU3D-b0xccf&_nc_ohc=Z9cpR9PFchYAX9JODQK&_nc_ht=scontent.fssa2-1.fna&_nc_tp=6&oh=aa4cbaeb0a3f65aaa1ab2e5c8b479c99&oe=5EB8D874"
        },
        date: "13 Abr 2020",
        content: "Pessoal, alguém lembra da receita de bolo de banana que tia Ana falou?",
        comments: [
          {
            id: 1,
            author: {
              name: "Camila Brito",
              avatar: "https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/s960x960/32239654_2163502230333781_709832715343495168_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeEQdA97mMqQMxE7Qbnpl7ezOJOMu-gVy-84k4y76BXL7-CNgMFkCWt6F6hMghVPWrvNFhKbPif09wqbGjwZysHr&_nc_ohc=PsNT3dbKEK0AX_dfd4R&_nc_ht=scontent.fssa2-2.fna&_nc_tp=7&oh=20d97381ca75c4ea7118b0f51a080def&oe=5EBB799D"
            },
            content: "Amor, o bolo é bem simples. A receita é a seguinte: 04 ovos, 5 bananas bem maduras (de preferência a caturra), farinha de trigo integral."
          },
          {
            id: 2,
            author: {
              name: "Suélia Primitivo",
              avatar: "https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/10628106_856859784333650_2146000394142685872_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeHvYb6UcvzM7a9h_CmkP9Wt-WLIzh3a-L_5YsjOHdr4v0eAMoPeT5EHVESNDKMHzuJZNHkGCM17fir-xcddFW78&_nc_ohc=thXxdqpxNrEAX8z4fN7&_nc_ht=scontent.fssa2-2.fna&oh=84f681c444a84351e91099bb1eab202e&oe=5EB97867"
            },
            content: "Meu filho, coloca uma pitada de canela em pó, que fica muito bom também."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        { this.state.posts.map(post => <Post key={post.id} data={post} />) }
      </div>
    );  
  }
}

export default PostList;