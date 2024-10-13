
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 15.5V17.5C12 19.5 10.5 21 8.5 21C6.5 21 5 19.5 5 17.5V8" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M19 21V6.5C19 4.5 17.5 3 15.5 3C13.5 3 12 4.5 12 6.5V15.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M16.5 18.5L19 21L21.5 18.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M5 3C3.61929 3 2.5 4.11929 2.5 5.5C2.5 6.88071 3.61929 8 5 8C6.38071 8 7.5 6.88071 7.5 5.5C7.5 4.11929 6.38071 3 5 3Z" stroke="#333333" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 's-turn-up',
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
  