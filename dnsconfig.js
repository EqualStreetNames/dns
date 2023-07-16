// Providers:

var REG_NONE = NewRegistrar("none"); // No registrar.
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");
var DSP_DIGITALOCEAN = NewDnsProvider("digitalocean");
var DSP_TRANSIP = NewDnsProvider("transip");

// Meta settings for individual records.
var CF_PROXY_OFF = {"cloudflare_proxy": "off"};   // Proxy disabled.
var CF_PROXY_ON = {"cloudflare_proxy": "on"};     // Proxy enabled.
var CF_PROXY_FULL = {"cloudflare_proxy": "full"}; // Proxy+Railgun enabled.

// Domains:

D(
  "equalstreetnames.org",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "185.199.108.153"), // GitHub Pages
  A("@", "185.199.109.153"), // GitHub Pages
  A("@", "185.199.110.153"), // GitHub Pages
  A("@", "185.199.111.153"), // GitHub Pages

  CNAME("www", "equalstreetnames.org."),

  CNAME("cape-town", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("chester-le-street", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("minsk", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("fremantle", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("sanfrancisco", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("sanpablo", "equalstreetnames.github.io.", TTL(43200)),

  TXT("_github-challenge-equalstreetnames", "149f242d22"),
  TXT("_github-pages-challenge-equalstreetnames", "6486bb1c94f8f81a2c71bda12021e1")
);

D(
  "equalstreetnames.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "185.199.108.153"), // GitHub Pages
  A("@", "185.199.109.153"), // GitHub Pages
  A("@", "185.199.110.153"), // GitHub Pages
  A("@", "185.199.111.153"), // GitHub Pages

  CNAME("www", "equalstreetnames.be."),

  CNAME("status", "page.updown.io.", TTL(43200)),

  CNAME("antwerpen", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("braine-lalleud", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("brugge", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("gent", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("leuven", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("liege", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("mons", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("namur", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("nivelles", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("rixensart", "equalstreetnames.github.io.", TTL(43200)),
  CNAME("roeselare", "equalstreetnames.github.io.", TTL(43200)),

  TXT("_github-challenge-equalstreetnames", "1dee9c23a4"),
  TXT("_updown.status", "updown-page=p/11462"),
  TXT("_github-pages-challenge-equalstreetnames", "735ed49343d7851640ac2279c03722")
);

D(
  "equalstreetnames.eu",

  REG_NONE,
  DnsProvider(DSP_CLOUDFLARE),

  DefaultTTL(3600),

  A("@", "76.76.21.21"),

  CNAME("edit", "cname.vercel-dns.com.", CF_PROXY_OFF),
  CNAME("statistics", "cname.vercel-dns.com.", CF_PROXY_OFF),
  CNAME("www", "cname.vercel-dns.com.", CF_PROXY_OFF),

  CNAME("assen", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("basel", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("belgrade", "naziviulica.openstreetmap.rs.opts-uri.redirect.center.", CF_PROXY_OFF),
  CNAME("bern", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("bilbao", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("bolzano", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("brandenburg-an-der-havel", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("bratislava", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("chorzow", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("dresden", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("frankfurt", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("freiburg-im-breisgau", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("freising", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("groningen", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("halle-saale", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("hannover", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("kaiserslautern", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("lausanne", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("leiden", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("leipzig", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("luxembourg", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("madrid", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("mainz", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("munich", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("oldenburg", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("rastede", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("saint-brieuc", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("stgallen", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("tallinn", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("tartu", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("tivat", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("vienna", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("warsaw", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("wiesbaden", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("wroclaw", "equalstreetnames.github.io.", CF_PROXY_ON),
  CNAME("zurich", "equalstreetnames.github.io.", CF_PROXY_ON),

  MX("@", 10, "spamrelay.zxcs.nl."),

  TXT("_dmarc", "v=DMARC1; p=none; sp=none;"),
  TXT("@", "v=spf1 a mx ip4:185.104.29.8 ip6:2a06:2ec0:1:0:0:0:0:80 include:filter-out.zxcs.nl ~all"),
  TXT("_github-challenge-equalstreetnames-org", "d77ce5af8b"),
  TXT("_github-pages-challenge-equalstreetnames","7d8fa683fc47269ff4beb668e2eb73"),
  TXT("x._domainkey", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA123EIufplB5azCrEZnUzt6nj2coxgr7db518feZYlUK9VBAe6GIkU9Vl7A+gbY5XSBLlLO17eFv1rdUNNSZtwlsrvJEyV/aA+JDyOaES7ZE0GVbPblYa9uzzP0+WyYDbLm1Ax7lcDdZrqapgTqt4YrTpIXUCcr63XWQdz8ffmERAyQEuoH8NyuI/IjYVBQTwI NXHfXTkSpaaZ5y7+Rt3PEdZiC/TbX9y46IsZoyFtEtdbi2KiugN47rSjcGl5aUrvWQf5VjVTVq/e5BjE+PmDoHAK7XH/HspsUN/aLN76557sk9C9phCSXKFvnvr4nJmzJzK584Iv9YwmqEpU3wyOwIDAQAB")
);

D(
  "equalstreetnames.brussels",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "185.199.108.153"), // GitHub Pages
  A("@", "185.199.109.153"), // GitHub Pages
  A("@", "185.199.110.153"), // GitHub Pages
  A("@", "185.199.111.153"), // GitHub Pages

  CNAME("www", "equalstreetnames.brussels."),

  TXT("_github-challenge-equalstreetnames", "e1ede02f4f"),
  TXT("_github-pages-challenge-equalstreetnames", "e0ed8d58d1815c98001eecf306b36a")
);
