// Cisco IP & Subnetting Calculator Utility
// Computes Network Address, Broadcast, Usable Range, CIDR Mask, Binary Octets, and Class

export function calculateSubnet(ipStr, cidrStr) {
  const cidr = parseInt(cidrStr, 10);
  if (isNaN(cidr) || cidr < 0 || cidr > 32) {
    return { error: 'CIDR prefix must be between /0 and /32' };
  }

  const octets = ipStr.trim().split('.').map(Number);
  if (octets.length !== 4 || octets.some(o => isNaN(o) || o < 0 || o > 255)) {
    return { error: 'Invalid IPv4 address format (e.g. 192.168.1.50)' };
  }

  // Convert IP to 32-bit integer
  const ipInt = (octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3];

  // Subnet mask
  const maskInt = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
  const netInt = (ipInt & maskInt) >>> 0;
  const bcastInt = (netInt | (~maskInt >>> 0)) >>> 0;

  const intToIp = (val) => [
    (val >>> 24) & 255,
    (val >>> 16) & 255,
    (val >>> 8) & 255,
    val & 255
  ].join('.');

  const toBinary = (val) => {
    return [
      ((val >>> 24) & 255).toString(2).padStart(8, '0'),
      ((val >>> 16) & 255).toString(2).padStart(8, '0'),
      ((val >>> 8) & 255).toString(2).padStart(8, '0'),
      (val & 255).toString(2).padStart(8, '0')
    ].join('.');
  };

  const netAddress = intToIp(netInt);
  const subnetMask = intToIp(maskInt);
  const broadcast = intToIp(bcastInt);
  const wildcardMask = intToIp((~maskInt) >>> 0);

  // Total and usable hosts
  const totalHosts = Math.pow(2, 32 - cidr);
  let usableHosts = totalHosts >= 2 ? totalHosts - 2 : (totalHosts === 1 ? 1 : 0);
  
  let firstHost = 'N/A';
  let lastHost = 'N/A';

  if (cidr < 31) {
    firstHost = intToIp(netInt + 1);
    lastHost = intToIp(bcastInt - 1);
  } else if (cidr === 31) {
    firstHost = intToIp(netInt);
    lastHost = intToIp(bcastInt);
    usableHosts = 2; // RFC 3021 point-to-point links
  } else {
    firstHost = intToIp(netInt);
    lastHost = intToIp(netInt);
    usableHosts = 1; // Single host route
  }

  // Determine IPv4 Class
  const firstOctet = octets[0];
  let ipClass = 'Unknown';
  let classType = 'Custom';
  if (firstOctet >= 1 && firstOctet <= 126) {
    ipClass = 'Class A';
  } else if (firstOctet === 127) {
    ipClass = 'Loopback (127.0.0.0/8)';
  } else if (firstOctet >= 128 && firstOctet <= 191) {
    ipClass = 'Class B';
  } else if (firstOctet >= 192 && firstOctet <= 223) {
    ipClass = 'Class C';
  } else if (firstOctet >= 224 && firstOctet <= 239) {
    ipClass = 'Class D (Multicast)';
  } else if (firstOctet >= 240 && firstOctet <= 255) {
    ipClass = 'Class E (Experimental)';
  }

  // Private vs Public
  let isPrivate = false;
  if (firstOctet === 10) isPrivate = true; // 10.0.0.0/8
  if (firstOctet === 172 && octets[1] >= 16 && octets[1] <= 31) isPrivate = true; // 172.16.0.0/12
  if (firstOctet === 192 && octets[1] === 168) isPrivate = true; // 192.168.0.0/16

  return {
    error: null,
    ip: ipStr,
    cidr: `/${cidr}`,
    netAddress,
    subnetMask,
    wildcardMask,
    broadcast,
    firstHost,
    lastHost,
    totalHosts: totalHosts.toLocaleString(),
    usableHosts: usableHosts.toLocaleString(),
    ipClass,
    scope: isPrivate ? 'RFC 1918 Private' : 'Public Routable',
    binaryIp: toBinary(ipInt),
    binaryMask: toBinary(maskInt),
    binaryNet: toBinary(netInt),
  };
}
