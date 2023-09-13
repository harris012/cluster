// Torrent content layout: Original
// Default Torrent Management Mode: Automatic
// Default Save Path: /media/downloads/torrents
// External program on finished: /scripts/xseed.sh "%F"

module.exports = {
  delay: 15,
  qbittorrentUrl: "http://localhost:8080",

  torznab: [
    "http://prowlarr.media.svc.cluster.local:9696/3/api?apikey={{ .PROWLARR_API_KEY }}", // ipt
    "http://prowlarr.media.svc.cluster.local:9696/4/api?apikey={{ .PROWLARR_API_KEY }}", // tl
    "http://prowlarr.media.svc.cluster.local:9696/5/api?apikey={{ .PROWLARR_API_KEY }}", // hdt
    "http://prowlarr.media.svc.cluster.local:9696/6/api?apikey={{ .PROWLARR_API_KEY }}", // ts
    "http://prowlarr.media.svc.cluster.local:9696/7/api?apikey={{ .PROWLARR_API_KEY }}", // mtv
    "http://prowlarr.media.svc.cluster.local:9696/8/api?apikey={{ .PROWLARR_API_KEY }}", // uhdb
    "http://prowlarr.media.svc.cluster.local:9696/11/api?apikey={{ .PROWLARR_API_KEY }}", // fl
    "http://prowlarr.media.svc.cluster.local:9696/15/api?apikey={{ .PROWLARR_API_KEY }}", // st
    "http://prowlarr.media.svc.cluster.local:9696/16/api?apikey={{ .PROWLARR_API_KEY }}", // blu
    "http://prowlarr.media.svc.cluster.local:9696/17/api?apikey={{ .PROWLARR_API_KEY }}", // ptp
    "http://prowlarr.media.svc.cluster.local:9696/43/api?apikey={{ .PROWLARR_API_KEY }}", // hds
    "http://prowlarr.media.svc.cluster.local:9696/44/api?apikey={{ .PROWLARR_API_KEY }}", // phd
    "http://prowlarr.media.svc.cluster.local:9696/77/api?apikey={{ .PROWLARR_API_KEY }}", // ant
    "http://prowlarr.media.svc.cluster.local:9696/78/api?apikey={{ .PROWLARR_API_KEY }}", // td
    "http://prowlarr.media.svc.cluster.local:9696/80/api?apikey={{ .PROWLARR_API_KEY }}", // ar
  ],

  action: "inject",
  includeEpisodes: true,
  includeNonVideos: true,
  duplicateCategories: true,

  matchMode: "safe",
  skipRecheck: true,
  linkType: "hardlink",
  linkDir: "/media/downloads/torrents/xseed",

  // I have sonarr, radarr, and manual categories set in qBittorrent
  // The save paths for them are set to the following:
  dataDirs: [
    "/media/downloads/torrents/sonarr",
    "/media/downloads/torrents/radarr",
    "/media/downloads/torrents/manual",
  ],

  outputDir: "/config/xseed",
  torrentDir: "/config/qBittorrent/BT_backup",
};
