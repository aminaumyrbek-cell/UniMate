import { useState } from 'react'
import {
  Home, Compass, Users, MessageCircle, MapPin, Bell, Search, Plus,
  Heart, MessageSquare, Bookmark, MoreHorizontal, GraduationCap,
  CalendarDays, ArrowUpRight, Sparkles, Menu, X, ChevronRight
} from 'lucide-react'

type NavItem = { label: string; icon: typeof Home }

const navItems: NavItem[] = [
  { label: 'Home', icon: Home },
  { label: 'Discover', icon: Compass },
  { label: 'Friends', icon: Users },
  { label: 'Messages', icon: MessageCircle },
  { label: 'Places', icon: MapPin },
]

const suggestions = [
  { name: 'Aruzhan S.', detail: '2nd year · Computer Science', initials: 'AS', color: 'rose' },
  { name: 'Dias K.', detail: '3rd year · Information Systems', initials: 'DK', color: 'sand' },
  { name: 'Madina R.', detail: '1st year · Cybersecurity', initials: 'MR', color: 'lavender' },
]

const posts = [
  {
    author: 'Aigerim Tulegen',
    meta: '2nd year · Information Systems · 2h ago',
    initials: 'AT',
    color: 'rose',
    text: 'Anyone working on a project for the upcoming hackathon? Looking for 1–2 teammates who are into UI/UX and frontend development. Let’s build something cool together! ✨',
    likes: 24,
    comments: 8,
    tag: 'Looking for teammates',
  },
  {
    author: 'Nursultan B.',
    meta: '3rd year · Software Engineering · 5h ago',
    initials: 'NB',
    color: 'sand',
    text: 'Found a really cozy spot to study near campus. Good coffee, quiet atmosphere and plenty of sockets. Sharing it here in case someone needs a new study place ☕',
    likes: 17,
    comments: 4,
    tag: 'Campus life',
  },
]

function Avatar({ initials, color = 'rose', small = false }: { initials: string; color?: string; small?: boolean }) {
  return <div className={`avatar avatar-${color} ${small ? 'avatar-small' : ''}`}>{initials}</div>
}

export default function App() {
  const [active, setActive] = useState('Home')
  const [liked, setLiked] = useState<number[]>([])
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (label: string) => {
    setActive(label)
    setMobileOpen(false)
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#" onClick={() => handleNav('Home')}>
          <span className="brand-mark">U</span>
          <span className="brand-name">UniMate<span>.</span><small>IITU COMMUNITY</small></span>
        </a>
        <div className="sidebar-label">MENU</div>
        <nav className="main-nav">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-link ${active === label ? 'active' : ''}`} onClick={() => handleNav(label)}>
              <Icon size={19} strokeWidth={1.8} /><span>{label}</span>
              {label === 'Messages' && <i className="nav-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-label">YOUR SPACE</div>
        <button className={`nav-link ${active === 'Saved' ? 'active' : ''}`} onClick={() => handleNav('Saved')}><Bookmark size={19} /><span>Saved posts</span></button>
        <button className={`nav-link ${active === 'Events' ? 'active' : ''}`} onClick={() => handleNav('Events')}><CalendarDays size={19} /><span>Events</span></button>
        <div className="sidebar-bottom">
          <div className="campus-card">
            <div className="campus-icon"><GraduationCap size={20} /></div>
            <strong>One campus.<br />Many connections.</strong>
            <span>Your IITU community starts here.</span>
          </div>
          <button className="profile-mini" onClick={() => handleNav('Profile')}>
            <Avatar initials="AU" small />
            <span><strong>Your profile</strong><small>Complete your profile</small></span>
            <ChevronRight size={16} />
          </button>
        </div>
      </aside>

      {mobileOpen && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMobileOpen(false)} />}

      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu size={22} /></button>
          <div className="breadcrumb">IITU Community <span>/</span> <strong>{active}</strong></div>
          <div className="topbar-actions">
            <label className="search-box"><Search size={17} /><input placeholder="Search UniMate..." /><kbd>⌘ K</kbd></label>
            <button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} /><i /></button>
            <Avatar initials="AU" small />
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><Sparkles size={14} /> YOUR CAMPUS COMMUNITY</div>
              <h1>Good afternoon<span>,</span><br />let’s connect.</h1>
              <p>Meet your people, share ideas, and make campus life better.</p>
            </div>
            <div className="welcome-art" aria-hidden="true">
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-circle"><Users size={43} strokeWidth={1.3} /></div>
              <span className="art-spark spark-one">✦</span><span className="art-spark spark-two">✳</span>
              <span className="art-pill">IITU · ALMATY</span>
            </div>
          </section>

          <section className="stats-grid">
            <div className="stat-card"><span className="stat-icon burgundy"><Users size={18} /></span><div><strong>1,240+</strong><small>Students connected</small></div><span className="stat-trend">Community</span></div>
            <div className="stat-card"><span className="stat-icon peach"><MessageCircle size={18} /></span><div><strong>86</strong><small>New conversations</small></div><span className="stat-trend">This week</span></div>
            <div className="stat-card"><span className="stat-icon green"><MapPin size={18} /></span><div><strong>32</strong><small>Campus places</small></div><span className="stat-trend">To explore</span></div>
          </section>

          <div className="content-grid">
            <section className="feed-column">
              <div className="section-heading"><div><h2>Your campus feed</h2><p>See what’s happening around IITU</p></div><button className="text-button">View all <ArrowUpRight size={15} /></button></div>
              <div className="composer">
                <Avatar initials="AU" />
                <button className="composer-input" onClick={() => alert('Post creation will be connected in the next development step.')}>Share something with your community...</button>
                <button className="composer-add" aria-label="Create post" onClick={() => alert('Post creation will be connected in the next development step.')}><Plus size={19} /></button>
              </div>
              <div className="feed-tabs"><button className="selected">For you</button><button>Following</button><span>Latest updates</span></div>
              {posts.map((post, index) => (
                <article className="post-card" key={post.author}>
                  <div className="post-header"><Avatar initials={post.initials} color={post.color} /><div className="post-author"><strong>{post.author}</strong><span>{post.meta}</span></div><button className="more-button" aria-label="More options"><MoreHorizontal size={20} /></button></div>
                  <p className="post-text">{post.text}</p>
                  <div className="post-tag">{post.tag}</div>
                  <div className="post-footer"><button className={liked.includes(index) ? 'liked' : ''} onClick={() => setLiked(current => current.includes(index) ? current.filter(i => i !== index) : [...current, index])}><Heart size={17} fill={liked.includes(index) ? 'currentColor' : 'none'} />{post.likes + (liked.includes(index) ? 1 : 0)}</button><button><MessageSquare size={17} />{post.comments} comments</button><button className="share-action"><ArrowUpRight size={17} />Share</button></div>
                </article>
              ))}
            </section>

            <aside className="right-column">
              <section className="side-card">
                <div className="side-card-heading"><div><h3>People you may know</h3><p>Meet fellow IITU students</p></div><button aria-label="See more"><ArrowUpRight size={17} /></button></div>
                <div className="suggestion-list">
                  {suggestions.map(person => <div className="suggestion" key={person.name}><Avatar initials={person.initials} color={person.color} small /><div className="suggestion-info"><strong>{person.name}</strong><span>{person.detail}</span></div><button className="add-friend" aria-label={`Add ${person.name}`} onClick={(e) => { e.currentTarget.textContent = 'Sent'; e.currentTarget.classList.add('sent') }}><Plus size={16} /></button></div>)}
                </div>
                <button className="full-link" onClick={() => handleNav('Discover')}>Discover more students <ChevronRight size={16} /></button>
              </section>
              <section className="side-card places-card">
                <div className="side-card-heading"><div><h3>Near your campus</h3><p>Places worth checking out</p></div><MapPin size={18} className="muted-icon" /></div>
                <div className="place-preview"><div className="place-visual coffee-visual"><span>☕</span></div><div><strong>Campus Coffee Spot</strong><span>📍 Near IITU · Coffee shop</span><small>Study-friendly atmosphere</small></div></div>
                <div className="place-preview"><div className="place-visual food-visual"><span>🥐</span></div><div><strong>Student Corner</strong><span>📍 5 min walk · Cafe</span><small>Quick bites & good prices</small></div></div>
                <button className="full-link" onClick={() => handleNav('Places')}>Explore campus places <ChevronRight size={16} /></button>
              </section>
              <div className="community-note"><div className="note-icon"><Sparkles size={17} /></div><div><strong>A community made for IITU</strong><p>Connect with verified students and make the most of your university years.</p></div></div>
            </aside>
          </div>
          <footer className="page-footer"><span>© 2026 UniMate · Made for IITU students</span><span>Privacy · Community guidelines · About</span></footer>
        </div>
      </main>
    </div>
  )
}