import React from 'react';

const randomMessage = (messages) => {
    const pick = Math.floor(Math.random() * messages.length);
    return messages[pick];
};

const WelcomeMessage = () => {
    const messages = [
        '"Angst, Potter?" - Draco Malfoy zu Beginn des trimagischen Pottrennens',
        'Auf das deine Beine auf dem Pott nicht einschlafen mögen!',
        '"Ich finde den Pottpokal echt dufte" - Albert Einstein',
        'Fun Fact: In den Jahren 1828 bis 1872 war der Pottpokal teil des olympischen Zehnkampfs',
        'Die Ursprünge des Pottpokals gehen auf Pharao Ramses II. zurück',
        'Der Pottpokal ist inzwischen so populär, dass sein Maskottchen "Haufi" sogar in die offizielle Emoji-Sammlung aufgenommen wurde 💩',
        '"Läuft bei dir Brudi" - Abraham Lincoln',
        '"Wenn ich nichts zu essen habe, kann ich nicht richtig aufs Klosett. Und wenn ich nicht richtig auf Klosett kann, ist der ganze Tag im Eimer." - Bud Spencer in "Zwei außer Rand und Band"',
    ];

    return (
        <div className="card bg-info text-white">
            <div className="card-body">
                <h5 className="card-title">Message of the day</h5>
                {randomMessage(messages)}
            </div>
        </div>
    );
};

export default WelcomeMessage;
