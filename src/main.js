import paravoz from './paravoz.html?raw'
import './main.css'
import './paravoz.scss'
import {gsap} from 'gsap'
import {CustomEase} from 'gsap/CustomEase'
import {TweenLite} from "gsap/gsap-core";

gsap.registerPlugin(CustomEase)

document
	.querySelector('.carouselContainer')
	.insertAdjacentHTML('beforeend', '<canvas id="particle_canvas"></canvas>')
document.body.insertAdjacentHTML('beforeend', paravoz)

const predictions = [
	"Случайно найдете место, где каждый закат похож на открытку.",
	"Морской круиз подарит вам ощущение полной свободы.",
	"Вы найдете пляж с необычным песком.",
	"Ваши фото из путешествия вдохновят друзей на приключения.",
	"Попробуете блюдо, которое станет любимым.",
	"В незнакомом городе вас встретят как давнего друга.",
	"Найдете идеальный сувенир, который будет напоминать о поездке.",
	"Прогулка по древнему мосту позволит оставить прошлое в прошлом.",
	"История случайного попутчика изменит ваш взгляд на жизнь.",
	"Уличный музыкант сыграет мелодию, которая запомнится вам на всю жизнь.",
	"Спонтанное путешествие приведет вас к месту, где звезды кажутся ближе.",
	"Короткое знакомство в самолете вам очень поможет в будущем.",
	"Навигатор приведет вас в необычное место.",
	"Звуки органа в пещере заставят вас прослезиться от красоты момента.",
	"Поездка в старинный город заставит вас иначе взглянуть на будущее.",
	"Вы прогуляетесь по мостовой, которая хранит следы великих людей прошлого.",
	"Поход в горы заставит вас вновь поверить в свои силы.",
	"Прогулка по ночному городу откроет его с другой стороны.",
	"Внезапно откроете для себя, что купаться ночью под звездами — это классно.",
	"Спонтанное путешествие окажется самым ярким событием за год.",
	"В поездке вы встретите человека, который перевернет вашу жизнь.",
	"Отправитесь в путешествие, которое заново научит вас мечтать.",
	"Вы побываете на острове неземной красоты.",
	"Встретите свой лучший рассвет на пляже.",
	"Наткнетесь на палатку с мороженым, за которым будете ездить из года в год.",
	"Вы побываете в городе, где все улыбаются.",
	"Вам выпадет шанс поплавать у подножия водопада. Не упускайте его!",
	"Ночь в пустыне, под звездным небом, подарит яркие эмоции.",
	"Прогулка по лесу окажется началом нового увлечения.",
	"Найдете ресторан с лучшими десертами в жизни.",
	"Незнакомец расскажет вам легенду, которая останется в вашем сердце.",
	"Вы отправитесь в путешествие, которое вдохновит на новый проект.",
	"Поездка на велосипеде за городом станет незабываемой.",
	"Уличный художник заставит вас вспомнить, насколько вы красивы.",
	"Спонтанная поездка в горы подарит любовь на всю жизнь.",
	"Старинная вещица с местного рынка станет семейной ценностью.",
	"Там, где слышен только ветер и птицы, вы обретете спокойствие.",
	"С вершины песчаных бархан все проблемы выглядят мелкими и проходящими.",
	"Вы узнаете, как выглядит восход в горах.",
	"На озере встретите самый красивый закат в своей жизни.",
	"Жажда приключений приведет вас к горячему источнику.",
	"Медитация у старого маяка подарит вам силы для серьезного рывка.",
	"В пути вы найдете книгу, которая перевернет ваш взгляд на мир.",
	"Дальняя поездка вдохновит вас на творчество.",
	"Вы побываете в городе, где все дома разноцветные.",
	"В 2025 году вы отправитесь в путешествие своей мечты.",
	"Вы встретите человека, который станет вашим вдохновением.",
	"Прогулка по пустой улице ранним утром вернет силы.",
	"В поездке вы обретете новых друзей.",
	"Город со старинными мостами поможет отпустить прошлое и шагнуть в будущее.",
	"Прогулка вдоль реки приведет вас к неожиданному открытию.",
	"Вы услышите пение птиц, которое запомнится навсегда.",
	"На вершине горы вас ждет чувство абсолютного покоя.",
	"Вы увидите радугу, которая покажется нарисованной специально для вас.",
	"В путешествии вы найдете место, о котором раньше не слышали.",
	"Вы найдете лавочку, которая станет любимым местом для встречи закатов.",
	"В дороге наткнетесь на кафе, где каждый гость чувствует себя как дома.",
	"Вы научитесь паре фраз на новом языке, которые вызовут улыбку у местных.",
	"Откроете для себя место, где море встречается с горами.",
	"Услышите звуки города, похожие на музыку.",
	"Походный костер на берегу реки согреет вашу душу.",
	"В поездке вы встретите детей, которые заново научат вас радоваться мелочам.",
	"В древнем храме вы загадаете желание, которое сбудется.",
	"Лодка доставит вас в бухту, спрятанную от посторонних глаз.",
	"Вас ждет приятное знакомство на прогулке по старым улочкам чужого города.",
	"Вас вдохновит место, где всегда звучит живая музыка.",
	"Вы найдете пляж, где можно будет увидеть следы только ваших ног.",
	"Случайная остановка в маленькой деревне станет началом большой истории.",
	"Вас впечатлит рассвет на борту самолета.",
	"Найдете место, которое заставит вас забыть обо всем на свете.",
	"Гейзеры, вулканы и нетронутая природа — вот чего просит ваша душа.",
	"Вы встретите художника, который напишет ваш отпускной портрет.",
	"Традиционный рынок на центральной площади поднимет настроение.",
	"В путешествии вы попробуете фрукты, которых никогда раньше не ели.",
	"Дорога будет приятнее, если взять с собой хорошую книгу.",
	"Вы найдете смотровую площадку с видом на облака.",
	"Старый поезд увезет вас в городок с очаровательными узкими улочками.",
	"Узкая тропинка приведет вас в пещеру с кристально чистым озером.",
	"Слушать ветер — лучшая медитация.",
	"Прогулка под дождем вернет ощущение детской радости.",
	"Вы попадете на местный праздник, который наполнит вас радостью.",
	"Вас согреет чашка чая в высокогорной деревне.",
	"Ваши следы на пляже будут первыми в этом году.",
	"Поездка к водопаду подарит вам ощущение силы природы.",
	"Посещение семейной мастерской принесет в вашу жизнь новое хобби.",
	"Дальняя дорога под словесные игры — то, что вам нужно.",
	"Вы попробуете новый вид меда на ярмарке.",
	"Вас поразит вид снежных вершин на горизонте.",
	"Вы побываете в городе своей мечты.",
	"Вы проведете ночь под звездами, которые светят ярче, чем обычно.",
	"Долгая прогулка приведет вас к заброшенной усадьбе.",
	"Вы окажетесь в месте, где тишина звучит, как музыка.",
	"Ваша поездка подарит вам ощущение дома в новом городе.",
	"Поездка, о которой вы давно мечтали, станет реальностью.",
	"Не забудьте взять в путешествие гостинцы из России. Ваши старания окупятся.",
	"Вас ждет теплое приветствие от жителей маленькой деревни.",
	"Ваше путешествие приведет вас туда, где время словно остановилось.",
	"Вы откроете для себя традицию, которая останется с вами навсегда.",
	"Дорога подарит вам чувство благодарности за каждый новый день."
];

function getRandomPrediction() {
	const randomIndex = Math.floor(Math.random() * predictions.length);
	return predictions[randomIndex];
}

const randomPrediction = getRandomPrediction();
const predzkazaniye = document.querySelector('#predzkazaniye')
const question = predzkazaniye.querySelector('.text .question');
const answer = predzkazaniye.querySelector('.text .answer')
answer.innerHTML = randomPrediction
question.innerHTML = randomPrediction
predzkazaniye.querySelector('.text [data-close]').addEventListener('click', () => {
	predzkazaniye.classList.add('js-hidden')
})
predzkazaniye.querySelector('.text [data-action]').addEventListener('click', () => {
	predzkazaniye.querySelector('.text').classList.add('toggled')
	predzkazaniye.querySelector('.text [data-close]').classList.remove('js-hidden')
	question.classList.add('js-hidden');
	answer.classList.remove('js-hidden')
	ym(96674199, 'reachGoal', 'prediction')
})

const canvas = document.getElementById('particle_canvas')
const ctx = canvas.getContext('2d')

// Настройки снежинок
const snowflakeSettings = {
	count: 500,
	size: 3,
	speed: 0.6, // Единая настройка скорости
	windStrength: 0.05,
}
const snowFlakes = []

function resizeCanvas() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	createSnowflakes() // Пересоздаем снежинки при изменении размера окна
}

window.addEventListener('resize', resizeCanvas)

class Snowflake {
	constructor() {
		this.reset()
	}

	reset() {
		this.x = Math.random() * canvas.width
		this.y = -Math.random() * canvas.height; // Начинаем сверху
		this.size = snowflakeSettings.size
		this.speed = snowflakeSettings.speed + Math.random() * 0.1 - 0.05; // Добавляем случайное отклонение
		this.opacity = Math.random() * 0.5 + 0.5
		this.windX = Math.random() * snowflakeSettings.windStrength * 2 - snowflakeSettings.windStrength; // Случайный "ветер"
	}

	update() {
		this.y += this.speed
		this.x += this.windX; // Добавляем "ветер" к движению по горизонтали
		if (this.y > canvas.height) {
			this.reset() // Сбрасываем снежинку, когда она достигает нижней части
		}
	}

	draw() {
		ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
		ctx.fill();
	}

}

function createSnowflakes() {
	snowFlakes.length = 0 // Очищаем массив
	for (let i = 0; i < snowflakeSettings.count; i++) {
		snowFlakes.push(new Snowflake())
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	snowFlakes.forEach(snowflake => {
		snowflake.update()
		snowflake.draw()
	})

	requestAnimationFrame(animate)
}

// Инициализация
resizeCanvas()
animate()


CustomEase.create(
	"chugga",
	"M0,0 C0.3,0.396 0.4,-0.004 0.476,-0.004 0.568,-0.004 0.642,0.37 1,0 "
);
CustomEase.create(
	"chugging",
	"M0,0 C0.288,0.1 0.418,0 0.494,0 0.588,0 0.696,0.106 1,0 "
);

TweenLite.to(".smoke", 1.5, {
	ease: "chugga",
	scale: 1.5,
	repeat: -1
});

TweenLite.to(".trainbody", 1.5, {
	ease: "chugging",
	scale: 1.5,
	repeat: -1
});



