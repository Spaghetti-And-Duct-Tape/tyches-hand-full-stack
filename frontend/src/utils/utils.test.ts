import { describe, expect, it, vi } from 'vitest';
import { wait } from './utils';

describe("wait", () => {
  it("returns a promise after a given time", async () => {
    vi.useFakeTimers();

    const callback = vi.fn();

    wait(1000).then(callback);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(999);
    await Promise.resolve();
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    await Promise.resolve();
    expect(callback).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  }); 
})