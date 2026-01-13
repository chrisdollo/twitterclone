import './JournalEntry.css'
import profilePic from '/Users/chrisdollo/Documents/coding_projects/hellacious/frontend/src/media/SpongeBob_SquarePants_character.png';

export default function JournalEntry(){
    return (
        <div className="tweet">

            <div className="user-identification-info">
                <div className="user-profile-pic">
                    <img className="that" src={profilePic} alt="profile-picture"/>
                </div>

                <div className="username">Yotio</div>
                <div className="user_at">@YotioLauryann</div>
            </div>

            <div className="journal-entry">Yesterday je suis allé au cinema avec mes amis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sunt dignissimos quia dolor, beatae voluptas ex? Dignissimos, accusantium repellat repellendus temporibus ipsa magnam ab illo ratione sunt vero voluptas placeat?</div>
            

        </div>
    )
}