
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M10 12L13 13C13 13 20.5 11.5 21.5 11.5C22.5 11.5 22.5 12.5 21.5 13.5C20.5 14.5 17 17.5 14 17.5C11 17.5 9 16 7 16C5 16 2 16 2 16" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 10C3 9 5 7.5 7 7.5C9 7.5 13.75 9.5 14.5 10.5C15.25 11.5 13 13 13 13" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'hold',
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
  