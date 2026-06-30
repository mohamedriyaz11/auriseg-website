import React, { useState } from 'react';

const IndustriesTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "/images/career-testimonial/Praveen.jpg",
      quote: "Being part of Auriseg’s GRC team means staying ahead of evolving regulations while working closely with security operations. It’s rare to see compliance this tightly integrated with actual defense.",
      name: "Praveen",
      title: "Senior GRC Consultant | Auriseg",
      companyIcon: "/headericon 1.png",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/praveen-p-4296615a",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 2,
      image: "/images/career-testimonial/Aswin.jpg",
      quote: "Working on engagements across the US, Middle East, and Southeast Asia accelerated my career through exceptional global exposure.",
      name: "Aswin",
      title: "Penetration Test Engineer | Auriseg",
      companyIcon: "/headericon 1.png",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 3,
      image: "/images/career-testimonial/Rahul.jpg",
      quote: "My early career on Auriseg's marketing team has been pivotal. I've worked on developing marketing campaigns, built cybersecurity narratives, and contributed to positioning that drives business impact. ",
      name: "Rahul",
      title: "Digital Marketing Associate| Auriseg",
      companyIcon: "/headericon 1.png",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/brahul2805",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },



  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === testimonials.length - 1;
  const currentTestimonial = testimonials[currentSlide];

  const ArrowBtn = ({ onClick, disabled, dir }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '50.85px', height: '50.85px',
        backgroundColor: disabled ? '#FFBDAD' : '#FF5536',
        border: 'none', borderRadius: '50%',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.3s', flexShrink: 0
      }}
      aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {dir === 'prev' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );

  const SocialIcons = () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      {/* LinkedIn */}
      <a href={currentTestimonial.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
        style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="5" fill="#FF5536" />
          <path fill="#F7F7F7" d="M6.5 19h3v-9h-3v9zM8 8.5c1 0 1.5-.7 1.5-1.5s-.5-1.5-1.5-1.5-1.5.7-1.5 1.5.5 1.5 1.5 1.5zm3.5 10.5h3v-5c0-2.5 3-2.7 3 0v5h3v-6c0-4.5-5-4.5-6-2.5v-1.5h-3v9z" />
        </svg>
      </a>
    </div>
  );

  return (

    <>
      {/* ══════════════════════════════
          DESKTOP VIEW
      ══════════════════════════════ */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '683px',
          background: '#FFFFFF',
          padding: '80px 0'
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[956px] mx-auto">

            {/* Badge — centered above box */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                border: '1px solid #ADADAD', padding: '10px 11px', backgroundColor: 'transparent'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '8px', height: '11.2px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 400, fontSize: '16px',
                  lineHeight: '100%', letterSpacing: '-0.04em', color: '#FF5536', textTransform: 'uppercase'
                }}>
                  LIFE ON THE INSIDE
                </span>
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 700, fontSize: '48px',
              color: '#030407', textAlign: 'center', margin: '0 0 40px 0'
            }}>
              The Caliber of the Team Is the Standard.
            </h2>

            {/* ── SINGLE BORDERED BOX — full width ── */}
            <div style={{
              width: '956px',
              height: '327px',
              border: '1px solid #ADADAD',
              borderRadius: '10px',
              padding: '14px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              gap: '44px',
              alignItems: 'stretch',
              boxSizing: 'border-box'
            }}>

              {/* Left — Image */}
              <div style={{ flexShrink: 0 }}>
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  style={{ width: '377px', height: '299px', borderRadius: '12px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/377x299/CCCCCC/FFFFFF?text=Image'; }}
                />
              </div>

              {/* Right — Content */}
              <div style={{
                width: '454px',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '43px',
                boxSizing: 'border-box'
              }}>

                {/* Quote */}
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '22px',
                  lineHeight: '140%', letterSpacing: '-0.02em', color: '#030407',
                  width: '454px', minHeight: '72px', margin: '0', textAlign: 'left'
                }}>
                  {currentTestimonial.quote}
                </p>

                {/* Divider */}
                <div style={{ width: '454px', height: '1px', backgroundColor: '#ADADAD', marginTop: '44px', marginBottom: '44px' }} />

                {/* Bottom row: company icon + name/title + social icons — all in ONE row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                  {/* Left side: icon + name + title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Company Icon Box */}
                    <div style={{
                      width: '50px', height: '50px', borderRadius: '10px',
                      backgroundColor: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <img
                        src={currentTestimonial.companyIcon}
                        alt="Company Icon"
                        style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                        onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                      />
                    </div>
                    {/* Name + Title */}
                    <div>
                      <div style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                        fontSize: '16px', lineHeight: '100%', letterSpacing: '-0.02em',
                        color: '#030407', marginBottom: '4px'
                      }}>
                        {currentTestimonial.name}
                      </div>
                      <div style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                        fontSize: '14px', lineHeight: '150%', color: '#030407'
                      }}>
                        {currentTestimonial.title}
                      </div>
                    </div>
                  </div>

                  {/* Right side: social icons */}
                  <SocialIcons />
                </div>
              </div>
            </div>

            {/* Arrow Buttons — below the box, centered */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
              <ArrowBtn onClick={prevSlide} disabled={isPrevDisabled} dir="prev" />
              <ArrowBtn onClick={nextSlide} disabled={isNextDisabled} dir="next" />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MOBILE VIEW  — unchanged
      ══════════════════════════════ */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '812.63px',
          background: '#FFFFFF',
          padding: '60px 34px'
        }}
      >
        <div className="max-w-[376px] mx-auto">

          {/* Badge Mobile */}
          <div className="flex justify-center mb-8">
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              border: '0.52px solid #ADADAD', padding: '5.18px 5.7px', backgroundColor: 'transparent'
            }}>
              <img src="/icons/playbook-icon.png" alt="icon"
                style={{ width: '6px', height: '8.4px' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '12px',
                lineHeight: '12px', letterSpacing: '-0.02em', color: '#FF5536', textTransform: 'uppercase'
              }}>
                LIFE ON THE INSIDE
              </span>
            </div>
          </div>

          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 700, fontSize: '32px',
            color: '#030407', textAlign: 'center', margin: '0 0 32px 0'
          }}>
            The Caliber of the Team Is the Standard.
          </h2>

          {/* Mobile Content Box */}
          <div style={{
            width: '308px', background: '#FFFFFF',
            border: '1px solid #ADADAD', borderRadius: '10px', padding: '13px 11.4px'
          }}>
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              style={{ width: '285.2px', height: '226.15px', borderRadius: '10.74px', objectFit: 'cover', objectPosition: 'center center', display: 'block', marginBottom: '20px' }}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/285x226/CCCCCC/FFFFFF?text=Image'; }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '15px',
              lineHeight: '140%', letterSpacing: '-0.02em', color: '#030407', marginBottom: '20px',
              textAlign: 'left'
            }}>
              {currentTestimonial.quote}
            </p>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#ADADAD', marginBottom: '20px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '10px', backgroundColor: '#EEEEEE',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img src={currentTestimonial.companyIcon} alt="Company Icon"
                  style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                  fontSize: '14px', lineHeight: '150%', color: '#030407', marginBottom: '4px'
                }}>
                  {currentTestimonial.name}
                </div>
                <div style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                  fontSize: '12px', lineHeight: '150%', color: '#444444'
                }}>
                  {currentTestimonial.title}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['linkedin'].map((platform) => (
                <a className="testimonial-social-icon" key={platform} href={currentTestimonial.socialLinks[platform]}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '44px', height: '44px', borderRadius: '100px',
                    backgroundColor: '#F7F7F7', color: '#FF5536', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  {platform === 'linkedin' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 9H2V21H6V9Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Arrow Buttons Mobile */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
            <ArrowBtn onClick={prevSlide} disabled={isPrevDisabled} dir="prev" />
            <ArrowBtn onClick={nextSlide} disabled={isNextDisabled} dir="next" />
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesTestimonials;
