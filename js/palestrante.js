$(document).ready(function() {
    fillSpeakerProfile();
});

function fillSpeakerProfile() {
    var url_atual = window.location.href;
    url_atual = url_atual.split('#')[1];

    $('#speaker-name').append(TALKERS[url_atual].name);
    $('#speaker-job').append(TALKERS[url_atual].job);
    $('#speaker-resume p').append(TALKERS[url_atual].resume);

}

const TALKERS = {
    "palestrante-1": {
        name: "Naruto Uzumaki",
        job: "coach motivacional",
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quisquam et dignissimos omnis fuga consequuntur architecto ipsam delectus repudiandae, laudantium deserunt iure voluptas, quam accusamus consequatur sint. Est, quis aspernatur.',
    },
    "palestrante-2": {
        name: "Naruto Uzumaki",
        job: "coach quantico",
        resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quisquam et dignissimos omnis fuga consequuntur architecto ipsam delectus repudiandae, laudantium deserunt iure voluptas, quam accusamus consequatur sint. Est, quis aspernatur.',
    },
};