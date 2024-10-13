
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M6.5 12.5V5H9.5L10.5 3.5H13.5L14.5 5H17.5V12.5H6.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M10 17.5L12 19.5L10 21.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 19.4995C6.47715 19.4995 1.5 17.2609 1.5 14.4995C1.5 13.3737 2.24418 12.3348 3.5 11.499M16 19.0835C19.5318 18.3119 22.5 16.5498 22.5 14.4995C22.5 13.3737 21.7558 12.3348 20.5 11.499L16 19.0835Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 10C12.8285 10 13.5 9.32845 13.5 8.5C13.5 7.67155 12.8285 7 12 7C11.1715 7 10.5 7.67155 10.5 8.5C10.5 9.32845 11.1715 10 12 10Z" stroke="#333333" strokeMiterlimit="10" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'reverse-lens',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  