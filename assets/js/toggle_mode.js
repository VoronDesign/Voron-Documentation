---
---
{% if site.toggle_color_scheme %}

  {% if site.toggle_auto_mode and site.toggle_auto_mode != "nil" %}
    {% assign toggle_auto_mode = site.toggle_auto_mode %}
  {% endif %}

  {% if site.toggle_text_1 %}
    {% assign toggle_text_1 = site.toggle_text_1 %}
  {% else %}
    {% assign toggle_text_1 = "-> Return to the Dark Side" %}
  {% endif %}

  {% if site.toggle_text_2 %}
    {% assign toggle_text_2 = site.toggle_text_2 %}
  {% else %}
    {% assign toggle_text_2 = "-> Color-Blind-Friendly Light Mode" %}
  {% endif %}

  const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	
  
  if (theme === "dark") {
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
  } else if (theme === "light") {
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_1 }}";
  } else if (userPrefers === '\"dark\"') {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
  } else if (userPrefers === '\"light\"'){
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_1 }}";
  } else if (userPrefers === 'normal'){
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
  }

  {% if toggle_auto_mode %}

    function setColorScheme(scheme) {
      switch(scheme){
        case 'dark':
          // Dark
          document.documentElement.setAttribute('data-theme', 'dark');
          document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
          window.localStorage.setItem('theme', '');
          break;
        case 'light':
          // Light
          document.documentElement.setAttribute('data-theme', 'light');
          document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_1 }}";
          window.localStorage.setItem('theme', '');
          break;
        default:
          // Default light
          document.documentElement.setAttribute('data-theme', 'light');
          document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_1 }}";
          window.localStorage.setItem('theme', '');
          break;
      }
    }
  
    function getPreferredColorScheme() {
      if (window.matchMedia) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          return 'dark';
        } else {
          return 'light';
        }
      }
      return 'light';
    }
  
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => setColorScheme(getPreferredColorScheme()));

  {% endif %}

{% endif %}