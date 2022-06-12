import { useState, useEffect } from 'react'
import DialogBox from './components/DialogBox'
import OptionSelect from './components/OptionSelect'
import ReactAudioPlayer from 'react-audio-player';
import pic from "./img/katyushaSnow.jpg"
import bat from "./img/battle.jpg"

//31 choice
//41 accept bribe
const text = [
	"It was 1787 when the empire of Grand Fenwick was going through a great period of thriving and wellness in every sector of the society. It was common for an average citizen to own a business, to work for the government or to have a job in a military base, either of these works were very well paid, and all this in gathering made people very happy.",
	"Nevertheless the government of Grand Fenwick was very ambitious and they had some interest in expanding their land, but we are talking about this later.",
	"Their neighbors in the zone were Galitzia and Sklavenoi, two kingdoms who owned an important trade route. They had good and stable governments but a lot of problems in their societies due to a big wage inequality and rising insecurity.",
	"Coming back to Grand Fenwick, the state of ambition, there they had a key department in the government in charge of all the logistic stuff that surrounded the economic institutions and obviously the political sector.",
	" In that department the boss was doctor Dimitri (the right hand of the current Zar), who was a brave and cruel strategist with a strong imperialist mindset.",
	"For him was working the agent Anastasija, a very intelligent person with 3 different degrees in military strategies, a highly centered and responsible person, mom of two kids, ex wife of a war veteran and someone with very defined moral values.",

	"As we mentioned earlier, in  that time Galitzia was going through some social problems which were now impacting the government, a new rebel group called the partisans was attempting to set new political ideas in the kingdom and they were rapidly winning followers in Galitzia streets.",
	"Anastasija was supervising the social movements in that empire, so when she realized that all of her suspicions were becoming true she immediately warned Dr.",
	"Dimitri, he showed himself amazed for the new, but in the inner he was only waiting an excuse to make a movement in order to weaken the defense of Galitzia, where Grand Fenwick had interest especially in their shores, because they had a big and growing harbor that was part of a big trade route.",
	"So weakening Galitzia and being able to take part of their lands and their harbor was the next task in Dimitri's schedule.",
	"He immediately thinked of Anastasija, the best element that the department had, he wanted to send her to Galitzia for her to infiltrate into the government office to make them take wrong decisions ando so give some advantage to the partisans",
	"but he knew that the moral of Anastasija wasn't going to let her do something like that, so he scammed her, he told Anastasija that the government of Galitzia was committing crimes against little colonies they had in the persian sea.",
	"Anastasija completely trusted Dimitri so she said goodbye to her kids and she embarked on the mission.",

	"When she first arrived in Galitzia, a special agent was waiting for her to show her the place where she was going to stay and introduce her a little to Gamoa, the capital of Galitzia.",
	"She only wanted to reach her room to start working.",
	"It took a couple of days to formulate a plan but she did it.",
	" the first step was to introduce herself in the government department as an activist who was trying to offer some new options for saving poor people in the Galitiza shores, the same people who had started the revolutionary movement,",
	"so the government was very interested in doing something for that people in order to empathize with them and make them change their mind.",
	"So Anastasija started working with the government and rapidly won the trust of the main secretary.",

	"At the same time this was happening, Grand Fenwick was secretly sending weapons, money and professional strategists to the partisans to make them stronger and be prepared to beat the current government of Galitzia.",
	"Partisans were very brave and strong people but they didn't know anything about military strategy so they were very glad with Grand Fenwick's people and they agreed to give some lands of Galitzia to Grand Fenwick if they, the partisans, won the revolution.",
	"Every part of  Dimtri's plan was going as it was supposed to be.",
	"Anastasija in the north had already won the trust of the persons in the government office and in the south the partisans were getting stronger and stronger and nobody in Galitzia had already noticed.",
	"The winter was coming and the date for the partisan attack, in December's first full moon, was too close.",
	"So Dimitri had to hurry if he wanted to distract to Galitzia's government,",
	"he told Anastasija that it was very important for the mission that she convinced Galitizia's dirigeants to move their troops from Gamoa (the capital) to Neverland, one of the colonies of Galitzia because they were in risk of an attack.",
	"Anastasija wasn't very convinced about this because Dimitri sounded very desperate and he didn't say any more details about the attack on Neverland.",
	"And the suspicions of Anastasija were confirmed when a letter which in the beginning was for the leader of the partisans was wrongly sent to Anastasija, in that letter all the plan of Dimitri was revealed.",
	"So now Anastasija knows with details the plan of Grand Fenwick and Dimitri and she has to make a decision…",

	"Anastasija was furious when she received the letter because she discovered that all the time she was only manipulated by Dimitri and the work that she was doing would serve to kill a lot of innocent people,",
	"so she decided to talk with Dimitri and tell him that she was out of the mission and that she was going to tell the plan to Galitizia's government, Dimitri first thought about killing her but their friendship stopped him.",
	"So he offered her 100 million Grands and a new position in the government department if she decided to continue with the plan.",

	"She said that she wasn't going to betray Dimitri but that she wanted to go back home with her kids. Dimitri got angry and stopped the conversation.",
	"Anastasija started thinking about what Dimitri could do to her children and she also imagined herself with 100 million living in retirement with her kids, so Anastasija looked again for Dimitri and agreed to continue with the plan to help partisans to get the power.",
	"So she went with Galitizia's main secretary and told him that Neverland was going to be attacked, and they should send all their troops to the north to defend them. The secretary didn't hesitate and sent 2000 soldiers to the north border.",
	"While the troops were on the way to the Neverland colonie, the partisans attacked Gamoa and took the central palace",
	"starting with this a big civil war between the ones who supported the rebels and the ones who wanted the old government.",
	"Anastasija was immediately sent to the island of San Serriffe for two years in order to protect her. She lived there with another name and another family, but when the time came she returned to Grand Fenwick.",
	"She was a big heroe for the empire because she had been declared as a dead character of the revolution where Grand Fenwick “helped” to Galitzia against the partisans, but now she was alive, so they made a great party.",
	"One year after her arrival to Grand Fenwick, a recognized member of the parliament found some documents where it was explained all the events of the revolution, and how Grand Fenwick actually helped the partisans instead of Galitzia's government.",
	"He told this to all the city and a new civil war started but now in Grand Fenwick, the revolutionaries found Anastasija and they riddled her, and her children were sent to a factory as workers.",
	"Sklavenoi realized about what Grand Fenwick made and helped the revolutionaries. This triggers a bloodthirsty and large war where Grand Fenwick's government is the winner but now they have an empire in crisis.",
	
	"She said that she wasn't going to betray Dimitri but that she wanted to go back home with her kids. Dimitri got angry and stopped the conversation.",
	"Anastasija started thinking about what Dimitri could do to her children, so she called a friend in Grand Fenwick and she managed to get her kids back with her but now in Galitzia.",
	"She was there when the attempt of attack was made by partisans in Gamoa. Anastasija tried to run away from the war but it had already started and all the ways out were very dangerous, so she had no option but to hide with her kids from the partisans and Galitzia's soldiers in Gamoa.",
	"After some weeks of battle, Galitzia managed to defeat partisans and the government of Galitzia is still in the old party hands.",
	"Everything seems to start to calm down but with Anastasija still trapped in Galitzia a civil war starts in Grand Fenwick due to some documents revealed about the plan of Dimitri",
	"after 1 year of battle, Grand Fenwick is dissolved and the lands are distributed between Galitizia, Sklavenoi and Wakanda.",
	"Anastasija was never able to get out from Galitzia and she was finally discovered by the government and eliminated with her family.",

	"END"
];

const pics = new Map();
pics.set(0, pic);
pics.set(43, bat);

function App() {
	const [i, setI] = useState(0);
	const [a, setA] = useState(null);
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(()=>{
		if(hasStarted) a ? setI(32) : setI(42);
		setHasStarted(true);
	},[a]);

	useEffect(() => {
		if((a && i===42) || (!a && i===50)){
			setI(49);
		}
	},[i]);

	function onClick(){
		setI(i+1);
	}

	return (
		<div 
			onClick={onClick}
			className="bg-gradient-to-b from-black to-zinc-600 h-screen"
			>

            <ReactAudioPlayer
                src=".\src\music\menuSong.mp3"
                autoPlay={true}
                controls={true}
				loop={true}
            />

			<div className="flex flex-row">
				<div className=" w-[26rem] h-full">
					<img
						className="object-fill"
						src={pic}
					/>
				</div>
				<div className="flex self-center w-full">
					<DialogBox text={text[i]}/>
				</div>
			</div>

			{i===31 && <OptionSelect textL={"Deny bribe"} textR={"Accept bribe"} a={setA}/>}
		</div>
	)
}

export default App