import LinkCard from './../components/LinkCard'

import './LinksScreen.css'

const LinksScreen = ()=>{

    const data = [
        {
          originalURL: "https://docs.google.com/spreadsheets/d/1AABqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/xz1a23",
          clickedCount: 15,
          createDate: "10th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/2BBqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/hdy72k",
          clickedCount: 8,
          createDate: "12th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/3CCqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/jsk82l",
          clickedCount: 20,
          createDate: "14th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/4DDqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/ncq72o",
          clickedCount: 5,
          createDate: "16th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/5EEqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/qpo91z",
          clickedCount: 12,
          createDate: "18th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/6FFqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/xmx45w",
          clickedCount: 18,
          createDate: "20th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/7GGqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/lko29a",
          clickedCount: 9,
          createDate: "22nd Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/8HHqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/bmh10v",
          clickedCount: 7,
          createDate: "24th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/9IIqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/gzt23y",
          clickedCount: 14,
          createDate: "26th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/10JJqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/rmk18s",
          clickedCount: 6,
          createDate: "28th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/11KKqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/vcz72t",
          clickedCount: 13,
          createDate: "30th Jan 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/12LLqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/bwp92e",
          clickedCount: 19,
          createDate: "1st Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/13MMqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/dyo58p",
          clickedCount: 11,
          createDate: "3rd Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/14NNqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/lnw37m",
          clickedCount: 4,
          createDate: "5th Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/15OOqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/jpf39r",
          clickedCount: 17,
          createDate: "7th Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/16PPqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/vtb64u",
          clickedCount: 10,
          createDate: "9th Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/17QQqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/gmq47z",
          clickedCount: 21,
          createDate: "11th Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/18RRqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/xdr20x",
          clickedCount: 9,
          createDate: "13th Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/19SSqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/rqz74s",
          clickedCount: 16,
          createDate: "15th Feb 2025"
        },
        {
          originalURL: "https://docs.google.com/spreadsheets/d/20TTqiqBwD6xkTTkNJ0BjObivPYYPQeSfuQiIH9qj_Ko/edit?gid=0",
          redirectURL: "https://shotify.in/zlo98v",
          clickedCount: 22,
          createDate: "17th Feb 2025"
        }
    ];

    return (
        <div id='links-screen'>
            <h1>Links</h1>
            <div className='links-container'>
                {data.map((element)=>{
                    return <LinkCard 
                        originalURL={element.originalURL}
                        redirectURL={element.redirectURL}
                        clickedCount={element.clickedCount}
                        createDate={element.createDate}
                    />
                })}
            </div>
        </div>
    )
}

export default LinksScreen