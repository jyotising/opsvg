
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M11.5143 21.7303L3.51435 17.2858C3.19689 17.1095 3 16.7748 3 16.4117V7.58849C3 7.22534 3.19689 6.89069 3.51436 6.71434L11.5143 2.26989C11.8164 2.1021 12.1836 2.1021 12.4857 2.26989L20.4856 6.71434C20.8031 6.89069 21 7.22534 21 7.58849V16.4117C21 16.7748 20.8031 17.1095 20.4856 17.2858L12.4857 21.7303C12.1836 21.8981 11.8164 21.8981 11.5143 21.7303Z" stroke="#333333" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'hexagon-one',
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
  