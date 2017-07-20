module.exports = {
  blogPostDir: 'sample-posts', // The name of directory that contains your posts.
  siteTitle: 'Land of Here', // Site title.
  siteTitleAlt: 'Land of Here | re-building community through collaboration', // Alternative site title for SEO.
  siteLogo: '/logos/loh-logo-light-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://landofhere.com', // Domain of your website without pathPrefix.
  pathPrefix: '/landofhere-site', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: 'Land of Here is a project about re-building community through collaboration', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '703558086407005', // FB Application ID for using app insights
  siteGATrackingID: 'UA-55719304-1', // Tracking code ID for google analytics.
  disqusShortname: '', // Disqus shortname.
  postDefaultCategoryID: 'Vision', // Default category for posts.
  userName: 'barrylow', // Username to display in the author segment.
  userTwitter: 'https://twitter.com/landofhere', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Angwin, CA, USA', // User location to display in the author segment.
  userAvatar: 'https://s.gravatar.com/avatar/cfcab338f04248543c71567de3aa11c8?s=150', // User avatar to display in the author segment.
  userDescription: '', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/landofhere',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/landofhere',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:barry@landofhere.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2017. Land of Here', // Copyright string for the footer of the website and RSS feed.

};
