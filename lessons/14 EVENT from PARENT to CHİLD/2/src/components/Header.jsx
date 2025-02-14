import logo from '/logo-name.svg';

export default function Header() {
    const now = new Date();
    const name = 'Result';

    return (
      <header>
        <img src={logo} alt={name} />

        <div>
          <span>Time is now: { now.toLocaleTimeString() }</span>
        </div>
      </header>
    )
}