import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";

export default function Dynamic() {
    //https://nba-players.herokuapp.com/players-stats

    const [playerData, setPlayerData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.jsonbin.io/b/5d0c6e6a860ae0341876aac6/2')
            const nbaData = await response.json()
            setPlayerData(nbaData.slice(0, 15))
        }
        fetchData()
    }, [])

    function handleChange(e) {
        const searchTerm = e.target.value;
        const filteredList = playerData.filter(player => 
          player.PFName.includes(searchTerm) || player.TName.includes(searchTerm)
        );
        setPlayerData(filteredList)
      }
      

    return (
        <div class="grid-view">
  <div class="player-card">
    <div class="player-card-img">
      <img src="/player-images/{Id}.jpg" />
    </div>
    <div class="player-card-details">
      <p>Full Name: <span>{PFName}</span></p>
      <p>Skill: <span>{SkillDesc}</span></p>
      <p>Value: <span>${Value}</span></p>
      <p>Next Match: <span>{CCode} vs. {VsCCode}</span> <span>{date_in_timezone}</span> </p>
    </div>
  </div>
  <input type="text" placeholder="Search by name" onChange={this.handleChange} />
</div>
    )
}