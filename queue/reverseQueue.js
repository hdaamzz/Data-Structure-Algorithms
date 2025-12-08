function reverseQueueRec(q) {
  if (q.isEmpty()) return;

  let removed = q.dequeue();

  reverseQueueRec(q);

  q.enqueue(removed);
}
