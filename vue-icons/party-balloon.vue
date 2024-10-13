
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M17 8C17.5 4 15.5637 2 12.0637 2C8.5637 2 6.5 4.5 7 8C7.5 11.5 10.6274 14 12.0637 14C13.5 14 16.5 12 17 8Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12.5 14C11.5 14.4848 10 15.9445 10 17.5C10 19.0555 15 18.2222 15 19.7778C15 21.3333 9.5 22 9.5 22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'party-balloon',
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
  