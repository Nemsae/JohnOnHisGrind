let requests = [
{requestId: 't2',  startedAt: 1489744808, ttl: 8},
{requestId: 't3',  startedAt: 1489744803, ttl: 3},
{requestId: 't1', startedAt: 1489744806, ttl: 12},
{requestId: 't4',  startedAt: 1489744810, ttl: 1}
]

function cumulativeTtl(requests){
    var min = requests[0].startedAt, max = 0;
    for(var i in requests){
        min = (requests[i].startedAt < min) ? requests[i].startedAt : min;
        max = ((requests[i].startedAt + requests[i].ttl) > max)?(requests[i].startedAt + requests[i].ttl):max;
    }
    console.log('max: ', max);
    console.log('min: ', min);
    return max - min;
};

console.log(cumulativeTtl(requests))
