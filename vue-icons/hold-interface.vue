
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M10 16.5L13 17.5C13 17.5 20.5 16 21.5 16C22.5 16 22.5 17 21.5 18C20.5 19 17 22 14 22C11 22 9 20.5 7 20.5C5 20.5 2 20.5 2 20.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 14.5C3 13.5 5 12 7 12C9 12 13.75 14 14.5 15C15.25 16 13 17.5 13 17.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M19.5 7.5H14.5C13.6716 7.5 13 8.17157 13 9C13 9.82843 13.6716 10.5 14.5 10.5H19.5C20.3284 10.5 21 9.82843 21 9C21 8.17157 20.3284 7.5 19.5 7.5Z" stroke="#333333" strokeWidth="2"/>
	<path d="M13 4.5H21" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'hold-interface',
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
  